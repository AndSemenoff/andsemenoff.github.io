#!/usr/bin/env python
# -*- coding: utf-8 -*
# file: dfs_maze_example.py
from collections import deque
import pprint
pp = pprint.PrettyPrinter()

def maze2graph(maze):
    height = len(maze)
    width = len(maze[0]) if height else 0
    graph = {(i, j): [] for j in range(width) for i in range(height) if not maze[i][j]}
    for row, col in graph.keys():
        if row < height - 1 and not maze[row + 1][col]:
            graph[(row, col)].append(("S", (row + 1, col)))
            graph[(row + 1, col)].append(("N", (row, col)))
        if col < width - 1 and not maze[row][col + 1]:
            graph[(row, col)].append(("E", (row, col + 1)))
            graph[(row, col + 1)].append(("W", (row, col)))
    return graph

def find_path_dfs(maze):
    start, goal = (1, 1), (len(maze) - 2, len(maze[0]) - 2)
    stack = deque([("", start)])
    visited = set()
    graph = maze2graph(maze)
    while stack:
        path, current = stack.pop()
        if current == goal:
            return path
        if current in visited:
            continue
        visited.add(current)
        for direction, neighbour in graph[current]:
            stack.append((path + direction, neighbour))
    return "NO WAY!"

maze = [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
]

pp = pprint.PrettyPrinter()
pp.pprint(find_path_dfs(maze))