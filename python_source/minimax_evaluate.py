def evaluate(b):
    player = 'x'
    opponent = 'o'
    for row in range(3):     
        if (b[row][0] == b[row][1] and b[row][1] == b[row][2]):        
            if (b[row][0] == player):
                return 10
            elif (b[row][0] == opponent):
                return -10
 
    for col in range(3) :      
        if (b[0][col] == b[1][col] and b[1][col] == b[2][col]):      
            if (b[0][col] == player):
                return 10
            elif (b[0][col] == opponent):
                return -10
 
    if (b[0][0] == b[1][1] and b[1][1] == b[2][2]):     
        if (b[0][0] == player):
            return 10
        elif (b[0][0] == opponent):
            return -10
 
    if (b[0][2] == b[1][1] and b[1][1] == b[2][0]):    
        if (b[0][2] == player):
            return 10
        elif (b[0][2] == opponent):
            return -10
 
    return 0