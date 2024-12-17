import os


project_structure = {
    "directories": [
        ".devcontainer",
        ".github/workflows",
        "cache",
        "custom",
        "lib",
        "log",
        "plugins",
        "templates",
        "tools",
        "src",
        "src/package_name",
        "tests"
        "uml"
    ],
    "files": [
        ".editorconfig",
        ".gitignore",
        ".gitpod.Dockerfile",
        ".gitpod.yml",
        ".prettierrc",
        "CODE_OF_CONDUCT.md",
        "CONTRIBUTING.md",
        "LICENSE.txt",
        "README.md",
        "SECURITY.md",
        "requirements.txt",
        "setup.py",
        "src/__init__.py",
        "src/package_name/__init__.py",
        "src/package_name/main.py",
        "tests/__init__.py",
        "tests/test_main.py"
    ]
}


# Content placeholders for files
file_contents = {
    ".editorconfig": "# EditorConfig helps maintain consistent coding styles\nroot = true\n[*]\ncharset = utf-8\n",
    ".gitignore": "# Ignore log and cache files\nlog/\ncache/\n.idea/\n.env/",
    ".gitpod.Dockerfile": "# Dockerfile for Gitpod configuration\nFROM gitpod/workspace-full",
    ".gitpod.yml": "# Gitpod configuration\nversion: 1.0.0\ntasks:\n  - init: echo \"Setting up the workspace\"",
    ".prettierrc": "{\n  \"printWidth\": 80,\n  \"singleQuote\": true\n}",
    "CODE_OF_CONDUCT.md": "# Code of Conduct\nPlease be respectful and inclusive when contributing to this project.",
    "CONTRIBUTING.md": "# Contributing Guide\nFollow these steps to contribute to this project...",
    "LICENSE.txt": "# License\nThis project is licensed under the MIT License.",
    "README.md": "# Project Overview\nWelcome to the project! This is the main documentation.",
    "SECURITY.md": "# Security Policy\nPlease report vulnerabilities to security@example.com.",
    "oh-my-zsh.sh": "#!/bin/sh\n# Oh-My-Zsh Initialization\necho \"Initializing Oh-My-Zsh\""
    
}

# Function to create the project structure
def create_project_structure(project_path):
    os.makedirs(project_path, exist_ok=True)

    # Create directories
    for directory in project_structure["directories"]:
        dir_path = os.path.join(project_path, directory)
        os.makedirs(dir_path, exist_ok=True)

        # Add .gitkeep to empty directories like cache and log
        if directory in ["cache", "log"]:
            with open(os.path.join(dir_path, ".gitkeep"), "w") as f:
                f.write("")

    # Create files with placeholder content
    for file in project_structure["files"]:
        file_path = os.path.join(project_path, file)
        with open(file_path, "w") as f:
            content = file_contents.get(file, "")  # Default to empty content
            f.write(content)

    print(f"Project structure created successfully at: {project_path}")


