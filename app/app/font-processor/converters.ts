import { Point } from './point.interface';

export function convertPathToPoints(svgPath: string): Array<Point> {
	return svgPath
		.trim()
		.split(' ')
		.map((coordsString) => {
			const [x, y] = coordsString
				.substring(1)
				.split(',')
				.map((str) => Number(str));
			return {
				x,
				y,
				type: coordsString[0] as 'M' | 'L',
			};
		});
}

export function convertPointsToPath(points: Array<Point>): string {
	return points
		.map((coords) => `${coords.type}${coords.x},${coords.y}`)
		.join(' ');
}
