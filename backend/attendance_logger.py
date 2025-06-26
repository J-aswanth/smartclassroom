import csv
import os
from datetime import datetime

csv_file = 'attendance_log.csv'

def initialize_csv():
    if not os.path.exists(csv_file):
        with open(csv_file, mode='w', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(['Name', 'Timestamp', 'Status'])

def log_attendance(name, status):
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    with open(csv_file, mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([name, timestamp, status])
    print(f"✅ Logged attendance for {name} at {timestamp}")

def already_marked_today(name):
    if not os.path.exists(csv_file):
        return False

    today = datetime.now().strftime('%Y-%m-%d')

    with open(csv_file, mode='r') as file:
        reader = csv.DictReader(file)
        if 'Name' not in reader.fieldnames or 'Timestamp' not in reader.fieldnames:
            print("⚠️ CSV headers missing or corrupted.")
            return False

        for row in reader:
            if row['Name'] == name and row['Timestamp'].startswith(today):
                return True
    return False
