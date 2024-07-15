import Header from "../layout/Header";

const Settings = () => {
  const page = "Settings"
  return (
    <>
    <Header page={page}/>
      <div className="container lg:mx-12 flex justify-center items-center fade-in">
        <div className="p-2 container mx-4">
          <h2 className="text-2xl font-bold mb-4">Settings Page <span className="text-sm text-gray-500 italic">Coming Soon.....</span></h2>
          <p>
            Implement settings for the application such as units
            (metric/imperial), language preferences, notifications, etc. Allow
            users to customize their experience.
          </p>
        </div>
      </div>
    </>
  );
}
//Might change to chart
export default Settings