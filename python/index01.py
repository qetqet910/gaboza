import pandas as pd

excel_file = r'C:/Users/qetqe/Documents/github/gaboza/python/University.xlsx'

df_from_xl = pd.read_excel(excel_file, engine="openpyxl")
df_from_xl.columns = df_from_xl.loc[4].tolist()
df_from_xl = df_from_xl.drop(index=list(range(0, 5)))

print(df_from_xl.head());

print(df_from_xl['학교명'].values);

print(df_from_xl['주소'].values);