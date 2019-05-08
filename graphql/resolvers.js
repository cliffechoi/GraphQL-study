const me = {
    name: "cliffechoi",
    age: 21
}

const resolvers = {
    Query: {
        person: () => me
    }
};

export default resolvers;
