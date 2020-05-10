const graph: any = {
  start: {
    A: 6,
    B: 2
  },
  A: {
    end: 1
  },
  B: {
    A: 3,
    end: 5
  },
  end: null
}

const costs: any = {
  A: 6,
  B: 2,
  end: Infinity
}

const parents: any = {
  A: 'start',
  B: 'start',
  end: null
}

const findLowestCostNode = (costs: {[index: string]: number}, processedNodes: string[]): string | null => {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (const node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && !processedNodes.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

const processedNodes: string[] = [];
let node = findLowestCostNode(costs, processedNodes);
while(node) {
  const cost = costs[node];
  const neighbours = graph[node];

  for (const neighbor in neighbours) {
    const neighborCost = cost + neighbours[neighbor];
    if (costs[neighbor] > neighborCost) {
      costs[neighbor] = neighborCost;
      parents[neighbor] = node;
    }

  }
  processedNodes.push(node);
  node = findLowestCostNode(costs, processedNodes);
}

