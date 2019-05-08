import { people, getPersonById } from "./data"

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => getPersonById(id)
    }
};

export default resolvers;
