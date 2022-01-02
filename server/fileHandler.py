import pandas as pd
import os

path = "./stocksFiles"


def get_files_names():
    dir_list = os.listdir(path)
    return dir_list


def get_file_data(filename):
    df = pd.read_csv(f"{path}/{filename}")
    return df
