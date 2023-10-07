import sqlite3

conn = sqlite3.connect('students.db')
cs = conn.cursor()

cs.execute("INSERT INTO students VALUES ('Mark', 'Mutua', 'mmmutua@gmail.com')")

print("Command executed Successfully...")

conn.commit()
conn.close()