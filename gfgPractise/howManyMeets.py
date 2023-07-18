'''Geek and Geekina are running on a running track. They love meeting each other. Geek can complete a lap in A seconds and Geekina can complete a lap in B seconds. Both start running at the same time and both can run atmost for C seconds. Find the number of times they can meet on the starting point after they have started running.'''

def howManyMeets(A,B,C):
    longest = A
    shortest = B
    if A<B:
        longest,shortest = shortest,longest
    count = 0
    for m in range(longest,C+1,longest):
        if m%shortest==0:
            count += 1
    return count

print(howManyMeets(1,3,14))