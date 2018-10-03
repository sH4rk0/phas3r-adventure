namespace z89 {
  export class GameUtils {
    scene: GameCity;
    currentState: GameCity;
    tween: Phaser.Tweens.Tween;

    constructor(scene: GameCity) {
      this.scene = scene;
    }

    addDelay(delay: number, callback: any): void {
      // this.scene.time.events.add(delay, callback);

      this.scene.time.addEvent({
        delay: delay,
        callback: callback
      });
    }

    itemOverEffect(item: Items): void {
      this.scene.gameUtils.tweenTint(
        item,
        new Phaser.Display.Color(255, 255, 255),
        new Phaser.Display.Color(0, 255, 0),

        100
      );
    }

    itemOutEffect(item: Items): void {
      this.scene.gameUtils.tweenTint(
        item,

        new Phaser.Display.Color(0, 255, 0),
        new Phaser.Display.Color(255, 255, 255),
        100
      );
    }

    iconOverEffect(item: any): void {
      this.scene.gameUtils.tweenTint(
        item,
        new Phaser.Display.Color(255, 255, 255),
        new Phaser.Display.Color(0, 255, 0),

        100
      );
    }

    iconOutEffect(item: any): void {
      this.scene.gameUtils.tweenTint(
        item,

        new Phaser.Display.Color(0, 255, 0),
        new Phaser.Display.Color(255, 255, 255),
        100
      );
    }

    btnOverEffect(btn: any, text: any): void {
      this.scene.gameUtils.tweenTint(
        btn,
        new Phaser.Display.Color(42, 118, 0),
        new Phaser.Display.Color(0, 255, 0),
        100
      );
      this.scene.gameUtils.tweenTint(
        text,
        new Phaser.Display.Color(255, 255, 255),
        new Phaser.Display.Color(0, 0, 0),
        500
      );
    }

    btnOutEffect(btn: any, text: any): void {
      this.scene.gameUtils.tweenTint(
        btn,
        new Phaser.Display.Color(0, 255, 0),
        new Phaser.Display.Color(42, 118, 0),
        100
      );
      this.scene.gameUtils.tweenTint(
        text,
        new Phaser.Display.Color(0, 0, 0),
        new Phaser.Display.Color(255, 255, 255),
        500
      );
    }

    tweenTint(
      obj: any,
      startColor: Phaser.Display.Color,
      endColor: Phaser.Display.Color,
      duration: number = 250,
      delay: number = 0,
      callback: any = null
    ): void {
      if (obj == undefined) return;
      let color: any;
      this.tween = this.scene.tweens.addCounter({
        from: 0,
        to: 100,
        duration: duration,
        delay: delay,
        onUpdate: tween => {
          color = Phaser.Display.Color.Interpolate.ColorWithColor(
            startColor,
            endColor,
            100,
            tween.getValue()
          );

          obj.tint = Phaser.Display.Color.GetColor(color.r, color.g, color.b);
        },
        onComplete: callback
      });
    }

    composeVertexMap(sceneObj: any) {
      sceneObj.lines = [];

      /*sceneObj.bounds.forEach((bound: any) => {
        sceneObj.lines.push(
          new Phaser.Geom.Line(
            sceneObj.vertexList[bound[0]].x,
            sceneObj.vertexList[bound[0]].y,
            sceneObj.vertexList[bound[1]].x,
            sceneObj.vertexList[bound[1]].y
          )
        );
      });*/

      sceneObj.obstacles.forEach(obstacle => {
        //this.sceneBounds.push(new Phaser.Geom.Line(bound.x1, bound.y1, bound.x2, bound.y2));
        obstacle.bounds.forEach((bound: any) => {
          sceneObj.lines.push(
            new Phaser.Geom.Line(
              sceneObj.vertexList[bound[0]].x,
              sceneObj.vertexList[bound[0]].y,
              sceneObj.vertexList[bound[1]].x,
              sceneObj.vertexList[bound[1]].y
            )
          );
        });
      });

      // console.log(sceneObj.lines);

      let intersect: boolean = false;
      for (let key1 in sceneObj.vertexList) {
        //console.log(sceneObj.vertexList.v1);

        for (let key2 in sceneObj.vertexList) {
          /*console.log(
          key1,
          key2,
          sceneObj.vertexList[key1].exclude.indexOf(key2) == -1
        );*/
          intersect = false;

          if (sceneObj.vertexList[key1].exclude.indexOf(key2) == -1) {
            sceneObj.lines.forEach(element => {
              if (
                Phaser.Geom.Intersects.LineToLine(
                  new Phaser.Geom.Line(
                    sceneObj.vertexList[key1].x + 2,
                    sceneObj.vertexList[key1].y + 2,
                    sceneObj.vertexList[key2].x - 2,
                    sceneObj.vertexList[key2].y - 2
                  ),
                  element
                )
              ) {
                intersect = true;

                /* console.log("intersect", key1, key2);*/
              } else {
                /* var graphics = this.scene.add.graphics();
              graphics.lineStyle(2, 0x00ff00, 1);
              graphics.lineBetween(
                sceneObj.vertexList[key1].x,
                sceneObj.vertexList[key1].y,
                sceneObj.vertexList[key2].x,
                sceneObj.vertexList[key2].y
              );*/
                /*console.log(
              "not intersect",
              key1,
              sceneObj.vertexList[key1].childs,
              key2
            );*/
              }

              //console.log(element, key1, key2, intersect);
            });

            if (!intersect) {
              var graphics = this.scene.add.graphics();
              graphics.lineStyle(2, 0x00ff00, 1);
              graphics.lineBetween(
                sceneObj.vertexList[key1].x + 1,
                sceneObj.vertexList[key1].y + 1,
                sceneObj.vertexList[key2].x - 1,
                sceneObj.vertexList[key2].y - 1
              );
              if (sceneObj.vertexList[key1].childs.indexOf(key2) == -1)
                sceneObj.vertexList[key1].childs.push(key2);
            } else {
              var graphics = this.scene.add.graphics();
              graphics.lineStyle(2, 0xff0000, 1);
              graphics.lineBetween(
                sceneObj.vertexList[key1].x + 1,
                sceneObj.vertexList[key1].y + 1,
                sceneObj.vertexList[key2].x - 1,
                sceneObj.vertexList[key2].y - 1
              );
            }

            //console.log(sceneObj.vertexList[key1], sceneObj.vertexList[key2]);
          }
        }

        console.log(sceneObj.vertexList);
      }
    }
  }

  export class NodeVertex {
    nameOfVertex: string;
    weight: number;
    constructor() {}
  }

  export class Vertex {
    name: string;
    nodes: NodeVertex[];
    weight: number;

    constructor(theName: string, theNodes: NodeVertex[], theWeight: number) {
      this.name = theName;
      this.nodes = theNodes;
      this.weight = theWeight;
    }
  }

  export class Dijkstra {
    vertices: any;
    constructor() {
      this.vertices = {};
    }

    addVertex(vertex: Vertex): void {
      this.vertices[vertex.name] = vertex;
    }

    findPointsOfShortestWay(
      start: string,
      finish: string,
      weight: number
    ): string[] {
      let nextVertex: string = finish;
      let arrayWithVertex: string[] = [];
      while (nextVertex !== start) {
        let minWeigth: number = Number.MAX_VALUE;
        let minVertex: string = "";
        for (let i of this.vertices[nextVertex].nodes) {
          if (i.weight + this.vertices[i.nameOfVertex].weight < minWeigth) {
            minWeigth = this.vertices[i.nameOfVertex].weight;
            minVertex = i.nameOfVertex;
          }
        }
        arrayWithVertex.push(minVertex);
        nextVertex = minVertex;
      }
      return arrayWithVertex;
    }

    findShortestWay(start: string, finish: string): string[] {
      let nodes: any = {};
      let visitedVertex: string[] = [];

      for (let i in this.vertices) {
        if (this.vertices[i].name === start) {
          this.vertices[i].weight = 0;
        } else {
          this.vertices[i].weight = Number.MAX_VALUE;
        }
        nodes[this.vertices[i].name] = this.vertices[i].weight;
      }

      while (Object.keys(nodes).length !== 0) {
        let sortedVisitedByWeight: string[] = Object.keys(nodes).sort(
          (a, b) => this.vertices[a].weight - this.vertices[b].weight
        );
        let currentVertex: Vertex = this.vertices[sortedVisitedByWeight[0]];
        for (let j of currentVertex.nodes) {
          const calculateWeight: number = currentVertex.weight + j.weight;
          if (calculateWeight < this.vertices[j.nameOfVertex].weight) {
            this.vertices[j.nameOfVertex].weight = calculateWeight;
          }
        }
        delete nodes[sortedVisitedByWeight[0]];
      }
      const finishWeight: number = this.vertices[finish].weight;
      let arrayWithVertex: string[] = this.findPointsOfShortestWay(
        start,
        finish,
        finishWeight
      ).reverse();
      arrayWithVertex.push(finish);
      return arrayWithVertex;
    }
  }
}
