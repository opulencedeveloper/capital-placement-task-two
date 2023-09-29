import Candidates from "./components/task-two/Candidates";
import Filter from "./components/task-two/Filter";
import Top from "./components/task-two/Top";
import Layout from "./components/task-two/layout/Layout";

const App = () => {
  return (
    <Layout> <main className="bg-primary-0 overflow-auto h-screen flex-1 pt-8 px-5 md:px-7">
      <Top />
      <div className="flex flex-wrap mt-7 md:flex-nowrap">
        <Filter />
        <Candidates />
      </div>
    </main></Layout>
  );
};

export default App;
