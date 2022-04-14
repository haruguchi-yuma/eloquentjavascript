const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
]

function buildGraph(edges) {
  let graph = Object.create(null)
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to)
    }
  }

  for (let [from, to] of edges.map(r => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph
}

const roadGraph = buildGraph(roads)

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address}
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels)
    }
  }
}

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory) // {direction: hoge}みたいなオブジェクトを返す関数
    state = state.move(action.direction)
    memory = action.memory;
    console.log(`Moved to ${action.direction}`)
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length)
  return array[choice];
}

VillageState.random = function(parcelCount = 5) {
  let parcels = []
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph))
    let place;
    do {
      place = randomPick(Object.keys(roadGraph))
    } while (place == address)
    parcels.push({place, address})
  }
  return new VillageState("Post Office", parcels)
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      // work.any(w => w.at != place)と同じ
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)})
      }
    }
  }
}

function yourRobot({ place, parcels }, route) {
  if (route.length > 0) return { direction: route[0], memory: route.slice(1) }
  const routesToPick = parcels.filter((parcel) => place != parcel.place).map((parcel) =>
    findRoute(roadGraph, place, parcel.place)
  )
  const routesToDeliver = parcels.filter((parcel) => place == parcel.place).map((parcel) =>
    findRoute(roadGraph, place, parcel.address)
  )
  const minLength = Math.min(
    ...[...routesToPick, ...routesToDeliver].map((route) => route.length)
  )
  const minRoute = [...routesToPick, ...routesToDeliver].find(
    (route) => route.length == minLength
  )
  return { direction: minRoute[0], memory: minRoute.slice(1) }
}

runRobotAnimation(VillageState.random(), yourRobot, []);

console.log(runRobot(VillageState.random(), yourRobot, []))


