import instance from ".";
const getAllPets = async () => {
  const response = await instance.get("/pets/");
  return response.data;
};
const addNewPet = async (name, type, image, available) => {
  const response = await instance.post("/pets/", {
    name: name,
    type: type,
    image: image,
    adopted: available,
  });
  return response.data;
};
export { getAllPets, getPetById, addNewPet };
