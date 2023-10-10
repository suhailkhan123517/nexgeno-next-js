const CategorySelect = async ({ setCatagoriesData, categories }) => {
  return (
    <>
      <div>
        <div className="w-full">
          <label
            for="country"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Categories
          </label>
          <div class="w-full">
            <select
              id="country"
              name="country"
              autocomplete="country-name"
              onChange={(e) => setCatagoriesData(e.target.value)}
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              {categories.map((item) => (
                <option key={item._id} value={item.category}>
                  {" "}
                  {item.category}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySelect;
