export const saveFilter = {
  saveLastFilter(filterType) {
    //save last filter
    try {
      const filterData = {
        type: filterType, //all, men, women
        timestamp: new Date().toISOString(), // Save the current timestamp
      };
      localStorage.setItem("lastProductFilter", JSON.stringify(filterData)); // Save filter data to localStorage. convert to string
      console.log("filter sparat:", filterType);
    } catch (err) {
      console.error("Kunde inte spara filter:", err);
    }
  },

  //Fetching last filter
  loadLastFilter() {
    try {
      const savedFilter = localStorage.getItem("lastProductFilter"); //get item from localStorage
      if (savedFilter) {
        const filterData = JSON.parse(savedFilter); //convert string back to object
        console.log("Ladda filter:", filterData);
        return filterData;
      }
      return null; // No saved filter found
    } catch (err) {
      console.error("Kunde inte läsa filter..:", err);
      return null;
    }
  },
  clearFilter() {
    localStorage.removeItem("lastProductFilter");
    console.log("Filter rensat");
  },
};
