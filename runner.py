def run_flask_app(
    app: str, host: str = "127.0.0.1", port: int = 5000, debug: bool = False
):
    """
    Run a Flask application with the specified parameters.

    Parameters:
    - app (str): The name of the application module (e.g., 'main').
    - host (str): The host to bind the server to (default: '127.0.0.1').
    - port (int): The port to run the server on (default: 5000).
    - debug (bool): Whether to enable debug mode (default: False).
    """
    import subprocess

    # Construct the command
    command = [
        "python",
        "-m",
        "flask",
        "--app",
        app,
        "run",
        "--host",
        host,
        "--port",
        str(port),
    ]

    # Add the debug flag if enabled
    if debug:
        command.append("--debug")

    # Run the command
    print(f"Running command: {' '.join(command)}")
    subprocess.run(command)


# Example usage
run_flask_app(app="main", host="0.0.0.0", port=5001, debug=True)
