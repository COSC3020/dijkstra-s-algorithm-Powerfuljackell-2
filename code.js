function dijkstra(graph) {
    return dijkstraHelper(graph, 0);
}

function minDistance(dist,sptSet)
{
	let min = Infinity;
	let min_index = -1;
	
	for(i = 0; i < dist.length; i++)
	{
		if (sptSet[i] == false && dist[i] <= min) 
		{
			min = dist[i];
			min_index = i;
		}
	}
	return min_index;
}

function printSolution(dist)
{
	console.log("Vertex \t\t Distance from Source");
	for(let i = 0; i < dist.length; i++)
	{
		console.log(i + " \t\t " + 
				dist[i]);
	}
}


function dijkstraHelper(graph, src)
{
	let dist = new Array(graph.length);
	let sptSet = new Array(graph.length);

	for(let i = 0; i < graph.length; i++)
	{
		dist[i] = Infinity;
		sptSet[i] = false;
	}

	dist[src] = 0;
	
	for(let count = 0; count < graph.length - 1; count++)
	{
		let u = minDistance(dist, sptSet);

		sptSet[u] = true;
		
		for(let i = 0; i < graph.length; i++)
		{

			if (!sptSet[i] && graph[u][i] != 0 && 
				dist[u] != Infinity &&
				dist[u] + graph[u][i] < dist[i])
			{
				dist[i] = dist[u] + graph[u][i];
			}
		}
	}
	
	return dist;
}
