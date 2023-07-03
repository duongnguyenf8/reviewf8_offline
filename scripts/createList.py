import os
import json


def get_subfolders(path):
    subfolders = {}
    for entry in os.scandir(path):
        if entry.is_dir():
            subfolder_name = entry.name
            subfolder_path = entry.path
            subfolder_contents = get_subfolders(subfolder_path)
            if subfolder_contents:
                subfolders[subfolder_name] = list(subfolder_contents.keys())
            else:
                subfolders[subfolder_name] = []
    return subfolders


path = 'Review'

subfolders = get_subfolders(path)
json_data = json.dumps(subfolders)

data_dir = 'assets/data'
os.makedirs(data_dir, exist_ok=True)

file_path = os.path.join(data_dir, 'data.json')
with open(file_path, 'w') as file:
    file.write(json_data)
