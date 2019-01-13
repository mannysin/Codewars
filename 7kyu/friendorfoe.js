/*
Problem:
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

Note: keep the original order of the names in the output.

My approach:

Run the .filter method on the array input and return only those with a string length of 4.

*/

function friend(friends){
    const result = friends.filter(friend => friend.length === 4);
    return result
}


/* Test Cases
Test.describe("Basic tests",function(){
Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
Test.assertSimilar(friend(["Hell", "Is", "a", "badd", "word"]), ["Hell", "badd", "word"])
Test.assertSimilar(friend(["Issa", "Issac", "Issacs", "ISISS"]), ["Issa"])
Test.assertSimilar(friend(["Robot", "Your", "MOMOMOMO"]), ["Your"])
Test.assertSimilar(friend(["Hello", "I", "AM", "Sanjay", "Gupt"]), ["Gupt"])
Test.assertSimilar(friend(["This", "IS", "enough", "TEst", "CaSe"]), ["This", "TEst", "CaSe"])
Test.assertSimilar(friend([]), [])
})
*/

friend(["Ryan", "Kieran", "Mark"]) // outputs:

/*
Best Practice:

function friend(friends){
  return friends.filter(n => n.length === 4)
}

*/