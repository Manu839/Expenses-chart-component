import { Bar } from "react-chartjs-2"
import { Chart as Chartjs, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js"
import logo from "./images/logo.svg"
Chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

function App() {
  const state = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],

      },
    ],
  }
  return (
    <div className="bg-[#f8e9dd] font-dm text-[18px]">
      <div className="max-w-xl bg-[#f8e9dd] mx-auto p-5 flex flex-col  justify-center h-screen">
        <article className="soft-red bg-soft-red p-8 rounded-2xl shadow flex items-center justify-between">
          <h2 className="font-bold text-white text-3xl">
            <span className="block text-base font-normal">My balance </span>
            $ 921.48
          </h2>
          <img src={logo} alt="" />
        </article>

        <article className="bg-white p-8 mt-8 rounded-2xl shadow">
          <article className="pb-8">
            <h1 className="font-bold text-para text-2xl md:text-3xl mb-5">
              Spending - Last 7 days
              </h1>
            <Bar data={state} />
          </article>
          <article className="pb-8 border-t border-slate-200  flex items-center justify-between">
            <h2 className="font-bold text-para text-4xl">
              <span className="text-base text-text font-normal block opacity-75">
                Total this month
                </span>
              $478.33
            </h2>

            <h3 className="flex items-end  text-para justify-end flex-col text-base font-bold">
              +2.4%
              <span className="font-normal text-text block opacity-75"> 
              from last month
              </span>

            </h3>
          </article>
        </article>
      </div>

    </div>
  )
}

export default App;