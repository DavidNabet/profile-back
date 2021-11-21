import Profile from "../models/Profile";
export const resolvers = {
  Query: {
    async getProfile(parent, { _id }) {
      return await Profile.findById(_id);
    },
    async allProfiles() {
      return await Profile.find();
    },
  },
  Mutation: {
    async createProfile(parent, { input }) {
      return await Profile.create(input);
    },
    async updateProfile(parent, { _id, input }) {
      return await Profile.findOneAndUpdate({ _id }, input, { new: true });
    },
    async deleteProfile(parent, { _id }) {
      return await Profile.findOneAndRemove({ _id });
    },
  },
};
