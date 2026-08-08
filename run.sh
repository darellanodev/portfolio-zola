#!/usr/bin/env bash
set -e

# Ask the user
echo "Select action:"
echo "  1) run"
echo "  2) build and copy to darellanodev.github.io"
read -p "Option [1-2]: " PAIR

# Main program
case "$PAIR" in
  1)
    ./zola.exe serve
    ;;
  2)
    ./run_build.sh && ./run_copy_build_except_demos.sh
    ;;
  *)
    echo "Error: Incorrect option"
    exit 1
    ;;
esac
