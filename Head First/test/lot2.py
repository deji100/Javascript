playerLocation = 0
locations = ['North', 'South', 'East', 'West']

def playerMovement(locations):
    print("What would you like to do? Move or Leave")
    player = input()
    if locations[0] == player:
        north = True
        return north
    elif locations[1] == player:
        south = True
        return south
    elif locations[2] == player:
        east = True
        return east
    elif locations[3] == player:
        west = True
        return

