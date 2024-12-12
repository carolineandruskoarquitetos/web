# Converting Images to .webp Format

This document provides a step-by-step guide on how to convert `.jpg` images (and other formats) to `.webp` format using the command line on macOS or Linux.

## Prerequisites

1. **Homebrew**: Ensure you have Homebrew installed on your macOS. If not, you can install it by running:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install `libwebp`**: Use Homebrew to install the `libwebp` package, which includes the `cwebp` command-line tool:

   ```bash
   brew install webp
   ```

## Converting Images

### Convert All `.jpg` Files to `.webp`

To convert all `.jpg` files in the current directory and its subdirectories to `.webp`, you can use the following command:

```bash
find . -type f -name '*.jpg' -exec cwebp {} -o {}.webp \;
```

### Explanation of the Command

- `find .`: This command starts searching in the current directory (`.`).
- `-type f`: This option specifies that you are looking for files.
- `-name '*.jpg'`: This option filters the results to include only files with the `.jpg` extension.
- `-exec`: This option allows you to execute a command on each file found.
- `cwebp {}`: This is the command that converts the found `.jpg` file to `.webp`. The `{}` is a placeholder for the current file found by `find`.
- `-o {}.webp`: This specifies the output file name, appending `.webp` to the original file name.
- `\;`: This indicates the end of the command to be executed.

### Convert Other Image Formats

You can modify the command to convert other image formats (e.g., `.png`, `.gif`) by changing the `-name` option. For example, to convert all `.png` files:

```bash
find . -type f -name '*.png' -exec cwebp {} -o {}.webp \;
```

### Batch Conversion for Multiple Formats

To convert multiple formats in one command, you can use a combination of `find` commands. For example, to convert both `.jpg` and `.png` files:

```bash
find . -type f \( -name '*.jpg' -o -name '*.png' \) -exec cwebp {} -o {}.webp \;
```

## Conclusion

Using the `find` command along with `cwebp`, you can efficiently convert images from `.jpg` and other formats to `.webp` in bulk. This method is particularly useful for optimizing images for web use, as `.webp` files typically have smaller sizes while maintaining quality.
