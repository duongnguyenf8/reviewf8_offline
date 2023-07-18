import os
import json


def get_subfolders_level_2(path):
    subfolders_level_2 = {}
    for subfolder_name in os.listdir(path):
        subfolder_path = os.path.join(path, subfolder_name)
        if os.path.isdir(subfolder_path):
            subfolders_level_2[subfolder_name] = []
            for subfolder_name_2 in os.listdir(subfolder_path):
                subfolder_path_2 = os.path.join(
                    subfolder_path, subfolder_name_2)
                if os.path.isdir(subfolder_path_2):
                    folder_number = int(subfolder_name_2[3:])
                    subfolders_level_2[subfolder_name].append(f"Day{folder_number}")
    return subfolders_level_2


path = 'Review'

subfolders_level_2 = get_subfolders_level_2(path)

for subfolder_name, subfolders in subfolders_level_2.items():
    subfolders.sort(key=lambda x: int(x[3:]))

json_data = json.dumps(subfolders_level_2)

data_dir = 'assets/data'
os.makedirs(data_dir, exist_ok=True)

file_path = os.path.join(data_dir, 'data.json')
with open(file_path, 'w') as file:
    file.write(json_data)
