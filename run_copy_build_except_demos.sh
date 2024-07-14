#!/bin/bash

# Define source and destination paths
source_path="D:\xampp\htdocs\proyectos\portfolio-zola\public"
destination_path="D:\xampp\htdocs\proyectos\darellanodev.github.io"
subdirectory_to_exclude="playablegames"

# Copy directories excluding the specified subdirectory
find "$source_path" -mindepth 1 -maxdepth 1 -type d ! -name "$subdirectory_to_exclude" -exec cp -R {} "$destination_path" \;

# Copy only the files of the public directory excluding the others subdirectories
find "$source_path" -maxdepth 1 -type f -exec cp {} "$destination_path" \;
