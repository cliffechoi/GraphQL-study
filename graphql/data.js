export const people = [
    {
        name: "cliffechoi",
        age: 21,
        id: 1
    },
    {
        name: "cliffechoi2",
        age: 22,
        id: 2
    },
    {
        name: "cliffechoi3",
        age: 23,
        id: 3
    },
    {
        name: "cliffechoi4",
        age: 24,
        id: 4
    }
]

export const getPersonById = (id) => {
    return people.filter(person => person.id === id)[0];
}