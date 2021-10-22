import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ResponsiveLine } from "@nivo/line";

const showToast = () => {
    toast(<h1>test</h1>)
}

const data = [
    {
        "id": "japan",
        "color": "hsl(66, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 191
            },
            {
                "x": "helicopter",
                "y": 45
            },
            {
                "x": "boat",
                "y": 85
            },
            {
                "x": "train",
                "y": 266
            },
            {
                "x": "subway",
                "y": 203
            },
            {
                "x": "bus",
                "y": 121
            },
            {
                "x": "car",
                "y": 8
            },
            {
                "x": "moto",
                "y": 130
            },
            {
                "x": "bicycle",
                "y": 170
            },
            {
                "x": "horse",
                "y": 51
            },
            {
                "x": "skateboard",
                "y": 228
            },
            {
                "x": "others",
                "y": 57
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(225, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 74
            },
            {
                "x": "helicopter",
                "y": 216
            },
            {
                "x": "boat",
                "y": 77
            },
            {
                "x": "train",
                "y": 5
            },
            {
                "x": "subway",
                "y": 204
            },
            {
                "x": "bus",
                "y": 208
            },
            {
                "x": "car",
                "y": 157
            },
            {
                "x": "moto",
                "y": 111
            },
            {
                "x": "bicycle",
                "y": 214
            },
            {
                "x": "horse",
                "y": 248
            },
            {
                "x": "skateboard",
                "y": 1
            },
            {
                "x": "others",
                "y": 111
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(236, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 77
            },
            {
                "x": "helicopter",
                "y": 162
            },
            {
                "x": "boat",
                "y": 150
            },
            {
                "x": "train",
                "y": 43
            },
            {
                "x": "subway",
                "y": 212
            },
            {
                "x": "bus",
                "y": 78
            },
            {
                "x": "car",
                "y": 273
            },
            {
                "x": "moto",
                "y": 36
            },
            {
                "x": "bicycle",
                "y": 2
            },
            {
                "x": "horse",
                "y": 4
            },
            {
                "x": "skateboard",
                "y": 264
            },
            {
                "x": "others",
                "y": 119
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(244, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 127
            },
            {
                "x": "helicopter",
                "y": 152
            },
            {
                "x": "boat",
                "y": 256
            },
            {
                "x": "train",
                "y": 56
            },
            {
                "x": "subway",
                "y": 190
            },
            {
                "x": "bus",
                "y": 217
            },
            {
                "x": "car",
                "y": 256
            },
            {
                "x": "moto",
                "y": 297
            },
            {
                "x": "bicycle",
                "y": 211
            },
            {
                "x": "horse",
                "y": 210
            },
            {
                "x": "skateboard",
                "y": 34
            },
            {
                "x": "others",
                "y": 38
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(353, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 143
            },
            {
                "x": "helicopter",
                "y": 193
            },
            {
                "x": "boat",
                "y": 28
            },
            {
                "x": "train",
                "y": 28
            },
            {
                "x": "subway",
                "y": 246
            },
            {
                "x": "bus",
                "y": 135
            },
            {
                "x": "car",
                "y": 258
            },
            {
                "x": "moto",
                "y": 194
            },
            {
                "x": "bicycle",
                "y": 127
            },
            {
                "x": "horse",
                "y": 256
            },
            {
                "x": "skateboard",
                "y": 77
            },
            {
                "x": "others",
                "y": 9
            }
        ]
    }
]

const LineChart = () => {
    return (
        <div style={{ height: "400px",width: "500px"}}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                curve="monotoneX"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -90,
                    legend: 'transportation',
                    legendOffset: 60,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}

const Home = () => {
    //state
    const [count, setCounter] = useState(0)
    const [page, setPage] = useState(1)

    // let count: number = 0

    const countUp = () => {
        // count += 1 //count = count + 1
        setCounter(count + 1)
        console.log(count)
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        console.log("re-render")
    }, [page])

    return (
        <>
            <h1>This page is home</h1>
            <h2>Count = {count}</h2>
            <button className="button is-danger is-small" onClick={countUp}>Click to Countup</button>
            <h2>Page = {page}</h2>
            <button className="button is-danger is-small" onClick={nextPage}>Next</button>
            <progress className="progress is-primary" value="50" max="100">15%</progress>
            <LineChart />
        </>
    )
}

export default Home;