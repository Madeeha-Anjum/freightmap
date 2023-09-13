import copy


def get_new_copy():
    ORIGINAL = [[9, 6, 4], [6, 8, 3]]
    copied_list = copy.deepcopy(ORIGINAL)
    return copied_list


def add_five(lst):
    lst[0][2] += 5


if __name__ == "__main__":
    my_list = get_new_copy()  # I want to get a copy of original list

    add_five(my_list)  # I want to add 5 to the last element of the first list
    print(my_list)  # I want to print modified list

    print(get_new_copy())  # I want to print original list
