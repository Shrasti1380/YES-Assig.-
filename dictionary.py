# Data Preparation
persons = [
    {"name": "Alice", "age": 28, "city": "New York"},
    {"name": "Bob", "age": 22, "city": "San Francisco"},
    {"name": "Charlie", "age": 30, "city": "Los Angeles"},
    {"name": "David", "age": 20, "city": "Chicago"}
]

# Filtering
filtered_persons = [person for person in persons if person["age"] >= 25]

# Sorting
sorted_persons = sorted(filtered_persons, key=lambda x: x["city"])

# Output
print("Final list of Persons:")
for person in sorted_persons:
    print(f"Name: {person['name']}, Age: {person['age']}, City: {person['city']}")
