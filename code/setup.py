import argparse
from src.create_project import create_project_structure

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Project Structure Initializer")
    parser.add_argument("project_path", help="Path to create the project structure")
    args = parser.parse_args()
    create_project_structure(args.project_path)