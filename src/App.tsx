import SectionOne from "./components/task-two/SectionOne";
import Top from "./components/task-two/Top";
import Layout from "./components/task-two/layout/Layout";



const App = () => {

  return (
    <Layout>
      <main className="bg-primary-0 overflow-auto h-screen flex-1 pt-8 px-5 md:px-7">
        <Top />
        <SectionOne />
      </main>
    </Layout>
  );
};

export default App;
