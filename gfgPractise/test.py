
def calcPosNTimes(times,k):
    trackLen = 0
    if times == -1:
        while(k>0):
            trackLen += k
            k -= 1
    else:
        while(times > 0 and k>0):
            trackLen += k
            k -= 1
            times -= 1
    
    return trackLen
    
def canReachTrackEnd(trackLength, spells, k):
    position = 0
    spellLen = len(spells)
    # calc for n-1 spells with end range
    for spell in range(0,spellLen-1):
        position += calcPosNTimes(spells[spell+1]-spells[spell],k)
        if position >= trackLength:
            return True
    # calc for last spell if required
    position += calcPosNTimes(-1,k)
    if position >= trackLength:
        return True
    # if cannot reach end
    return False
        
class Solution:
    def calcPosNTimes(times,k):
        trackLen = 0
        while(times > 0 and k>0):
            trackLen += k
            k -= 1
        return trackLen
    
    def canReachTrackEnd(trackLength, spells, k):
        position = 0
        spellLen = len(spells)
        # calc for n-1 spells with end range
        for spell in range(0,spellLen-1):
            position += calcPosNTimes(spells[spell+1]-spells[spell],k)
            if position >= trackLength:
                return True
        # calc for last spell if required
        position += calcPosNTimes(spells[spell],k)
        if position >= trackLength:
            return True
        # if cannot reach end
        return False
    
    def minimizeTopSpeed(self, n :int, spells : List[int], trackLength:int) -> int:
        # code here
        start = 1
        end = trackLength + len(spells)
        solvedK = 1
        # binary search to quickly find best case k
        while start<end :
            mid = (start+end)//2
            if canReachTrackEnd(trackLength,spells,mid):
                end = mid
                solvedK = mid
            else:
                start = mid + 1
        return solvedK