import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovids } from './features/covidSlice'


function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const users = Object.values(user.covid).map((list) => list)
  console.log(user)

  // store and render each state
  const states = users.map((state) => state.states)
  const EachStates = states
  console.log(EachStates);



  useEffect(() => {
    dispatch(fetchCovids())
  }, [dispatch]);
  return (
    <div className="">
      {!user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>ERROR: {user.error}</div> : null}

      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 underline">ToTal Covid-19 Cases</h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">ToTal Number of Cases</h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">TotalSamplesTested</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">TotalActiveCases</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"> TotalConfirmedCases</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Death</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Discharged</th>

                </tr>
              </thead>
              <tbody>
                {Object.values(users).map((list, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-4 py-3">{list.totalSamplesTested}</td>
                      <td className="px-4 py-3">{list.totalActiveCases}</td>
                      <td className="px-4 py-3">{list.totalConfirmedCases}</td>
                      <td className="px-4 py-3">{list.death}</td>
                      <td className="px-4 py-3">{list.discharged}</td>
                      <td className="w-10 text-center">

                      </td>
                    </tr>
                  )

                })}
              </tbody>
            </table>
          </div>

        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">Number of cases by state</h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">states</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Cases On Admission</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Confirmed Cases</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Death</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Discharged</th>

                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {EachStates.map((state) => (
                  (
                    state.map((state) => {
                      return (
                        <tr key={state._id}>
                          <td className="px-4 py-3">{state.state}</td>
                          <td className="px-4 py-3">{state.casesOnAdmission}</td>
                          <td className="px-4 py-3">{state.confirmedCases}</td>
                          <td className="px-4 py-3">{state.death}</td>
                          <td className="px-4 py-3">{state.discharged}</td>
                          <td className="w-10 text-center">

                          </td>
                        </tr>
                      )
                    })
                  )
                ))}

              </tbody>
            </table>
          </div>

        </div>
      </section>

    </div >
  );
}

export default App;
