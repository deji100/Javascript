player_location = 0.0


def player_movement(north=False, south=False, west=False, east=False):

    print('What would you like to do?: Move or Leave')
    player_input = input()
    if player_input == 'Move':
        print('move where?: North, South, East, West')
        direction = input()
        if direction == 'North':
            # Player moves north
            north = True
            return north
        elif direction == 'South':
            # Player moves south
            south = True
            return south
        elif direction == 'East':
            # Player moves east
            east = True
            return east
        elif direction == 'West':
            # Player moves west
            west = True
            return west
    else:
        print('Thank you for playing!')
        return exit

while player_location == 0.0:
    print('You are in the parking lot where would you like to go?')
    player_movement()
    if player_movement(north=False):
        Player_location = 1.0
    else:
        print('You can’t walk home it’s too far!')

while player_location == 1.0:

    print('You are in front of the Wellington County Graveyard')
    player_movement()
    if player_movement():
        player_location = 2.0
    elif player_movement():
        player_location = 1.5
    elif player_movement():
        player_location = .05
    elif player_movement():
        player_location = 0.0
    else:
        print('Then Entrance is made of bricks that stands 10 ft tall and you can, see the lights of the office in '
              'the back')