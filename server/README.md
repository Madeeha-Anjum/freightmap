# Welcome to the server

1. setup the virtual environment

   ```bash
   python -m venv .venv
   ```

2. Activate the virtual environment

   ```bash
      source .venv/Scripts/activate
   ```

3. Install the requirements

   ```bash
   pip install -r requirements.txt
   ```

4. Run the server

   ```bash
   uvicorn app:app --reload --port 8000
   ```
