import { mkdir, readdir, rm } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const sourceDir = path.join(root, 'assets', 'foto-originals')
const outputDir = path.join(root, 'public', 'foto')
const widths = [480, 768, 1200]
const sourceExtensions = new Set(['.jpeg', '.jpg', '.png', '.webp', '.tif', '.tiff'])

function outputName(file, width, format) {
  const parsed = path.parse(file)
  return `${parsed.name}-${width}.${format}`
}

async function main() {
  await rm(outputDir, { recursive: true, force: true })
  await mkdir(outputDir, { recursive: true })

  const files = (await readdir(sourceDir))
    .filter((file) => sourceExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))

  if (files.length === 0) {
    throw new Error(`No source images found in ${sourceDir}`)
  }

  for (const file of files) {
    const input = path.join(sourceDir, file)
    const image = sharp(input, { limitInputPixels: false }).rotate()
    const metadata = await image.metadata()
    const maxWidth = metadata.width ?? widths.at(-1)

    await Promise.all(
      widths
        .flatMap((width) => {
          const resized = image.clone().resize({
            width,
            withoutEnlargement: true,
          })

          return [
            resized
              .clone()
              .webp({ quality: 72, effort: 5 })
              .toFile(path.join(outputDir, outputName(file, width, 'webp'))),
            resized
              .clone()
              .avif({ quality: 52, effort: 5 })
              .toFile(path.join(outputDir, outputName(file, width, 'avif'))),
          ]
        })
    )

    console.log(`Generated variants for ${file}`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
