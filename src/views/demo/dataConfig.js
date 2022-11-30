//  
export let testNode = {
    nodes: [{
        id: "1",
        type: "rect",
        x: 100,
        y: 100,
        text: "节点1",
    },
    {
        id: "2",
        type: "circle",
        x: 300,
        y: 200,
        text: "节点2",
    },
    {
        id: "3",
        type: "circle",
        x: 100,
        y: 200,
        text: "节点3",
    },
    ],
    edges: [{
        sourceNodeId: "1",
        targetNodeId: "2",
        type: "polyline",
        text: "连线",
    },
    {
        sourceNodeId: "2",
        targetNodeId: "3",
        type: "polyline",
        text: "连线",
    },
    ],
}


// 拖拽面板数据


export function dndPanelItems (callback) {
    //StartTask
    const dndPanelPra = [
        {
            label: '选区',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAOVJREFUOBGtVMENwzAIjKP++2026ETdpv10iy7WFbqFyyW6GBywLCv5gI+Dw2Bluj1znuSjhb99Gkn6QILDY2imo60p8nsnc9bEo3+QJ+AKHfMdZHnl78wyTnyHZD53Zzx73MRSgYvnqgCUHj6gwdck7Zsp1VOrz0Uz8NbKunzAW+Gu4fYW28bUYutYlzSa7B84Fh7d1kjLwhcSdYAYrdkMQVpsBr5XgDGuXwQfQr0y9zwLda+DUYXLaGKdd2ZTtvbolaO87pdo24hP7ov16N0zArH1ur3iwJpXxm+v7oAJNR4JEP8DoAuSFEkYH7cAAAAASUVORK5CYII=',
            callback: callback
        },
        {
            // type: 'circle',
            type: 'StartTask',
            text: '开始',
            label: '开始节点',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==',
        },
        {
            type: "UserTask",
            label: "用户任务",
            icon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==",
            className: "important-node",
            properties: {
                disabled: true
            }
        },
        // {

        //     type: 'rect',
        //     label: '用户任务',
        //     icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==',
        //     className: 'important-node',
        //     properties: {
        //         disabled: true
        //     },



        // },
        {

            // type: 'rect',
            type: 'SystemTask',
            label: '系统任务',
            icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY5Mjg5NjU4Njg5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY4OTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTQ0Ni40NzU3NTggNjYwLjEwNzQ0NEM0NDIuMTgyMTE4IDY2MC4xMDc0NDQgNDM3Ljc4OTM5NSA2NTkuMjgxNzQ0IDQzMy41NjE4MTEgNjU3LjQ2NTIwNCAzNzEuODMyNDg2IDYzMS4yNDA5NzUgMzMxLjkzNDY2NiA1NzAuODY1Nzk4IDMzMS45MzQ2NjYgNTAzLjYyMDc5NyAzMzEuOTM0NjY2IDQxMS41Mzg3NDMgNDA2LjYxMDk2NiAzMzYuNTk4MjIgNDk4LjQyODc5NiAzMzYuNTk4MjIgNTkwLjI0NjYyNiAzMzYuNTk4MjIgNjY0LjkyMjkyNiA0MTEuNTM4NzQzIDY2NC45MjI5MjYgNTAzLjYyMDc5NyA2NjQuOTIyOTI2IDU2OS44NzQ5NTggNjI2LjkwNzcwMiA2MzAuMTE4MDIzIDU2OC4wNTE4MTMgNjU3LjEwMTg5NyA1NTEuNDM4NzMgNjY0LjY5ODMzNiA1MzEuODUzMTI5IDY1Ny40NjUyMDQgNTI0LjIyMzY2MSA2NDAuODUyMTIyIDUxNi42NjAyNSA2MjQuMjcyMDY4IDUyMy45MjY0MDkgNjA0LjY1MzQzOCA1NDAuNTA2NDY0IDU5Ny4wNTY5OTkgNTc1Ljk0NTUwNCA1ODAuODA3MjI1IDU5OC44NjY5MzMgNTQ0LjExMzEyMSA1OTguODY2OTMzIDUwMy42MjA3OTcgNTk4Ljg2NjkzMyA0NDcuOTM1NTk1IDU1My44MTY3NDYgNDAyLjY1NDIxMiA0OTguNDI4Nzk2IDQwMi42NTQyMTIgNDQzLjA0MDg0NiA0MDIuNjU0MjEyIDM5Ny45OTA2NTkgNDQ3LjkzNTU5NSAzOTcuOTkwNjU5IDUwMy42MjA3OTcgMzk3Ljk5MDY1OSA1NDQuMzExMjg5IDQyMi4xMDEwOTcgNTgwLjg0MDI1MyA0NTkuNDIyNzMzIDU5Ni42NjA2NjMgNDc2LjIwMDk1NSA2MDMuODI3NzM4IDQ4NC4wMjg1OSA2MjMuMjE1MTcyIDQ3Ni44OTQ1NDMgNjM5Ljk5MzM5NCA0NzEuNTQ0MDA3IDY1Mi41NDQwMzMgNDU5LjMyMzY0OSA2NjAuMTA3NDQ0IDQ0Ni40NzU3NTggNjYwLjEwNzQ0NCIgcC1pZD0iNjg5NyIgZmlsbD0iIzE4N0RGRiI+PC9wYXRoPjxwYXRoIGQ9Ik01NDIuODUxNDUxIDk5Ni43MDg5NjcgNDU0LjAzOTE2OSA5OTYuNzA4OTY3QzQwOC43MjQ3NTggOTk2LjcwODk2NyAzNzEuODY1NTE0IDk1OS44NDk3MjMgMzcxLjg2NTUxNCA5MTQuNTY4MzRMMzcxLjg2NTUxNCA4MjEuNTYxNTAyQzM2My4yNDUyMDcgODE4Ljk4NTMxOCAzNTMuNDM1ODkyIDgxNS44NDc2NTggMzQ0LjA4ODk2OSA4MTIuNTc3ODg3TDI5My42MjIxOTEgODYzLjAxMTYzN0MyNjIuNjA4OTAyIDg5NC4wNTc5NTQgMjA4LjQ3NjAxNiA4OTQuMDU3OTU0IDE3Ny40NjI3MjcgODYzLjAxMTYzN0wxMTQuNjQzNDc4IDgwMC4yMjU0MTZDODIuNjA2MzIyIDc2OC4xODgyNiA4Mi42MDYzMjIgNzE2LjA3MDA4MSAxMTQuNjEwNDUgNjg0LjAzMjkyNUwxMzguOTg1MTEyIDY1OS42OTEyOTFDMTUxLjg5OTA1OCA2NDYuNzc3MzQ1IDE3Mi43NzI3NTIgNjQ2Ljc3NzM0NSAxODUuNjg2Njk4IDY1OS42OTEyOTEgMTk4LjYwMDY0NSA2NzIuNjA1MjM4IDE5OC42MDA2NDUgNjkzLjQ3ODkzMiAxODUuNjg2Njk4IDcwNi4zOTI4NzhMMTYxLjM0NTA2NSA3MzAuNzM0NTEyQzE1NS4wNjk3NDYgNzM3LjA0Mjg1OSAxNTUuMDY5NzQ2IDc0Ny4yMTU0ODIgMTYxLjM0NTA2NSA3NTMuNTIzODI5TDIyNC4xNjQzMTQgODE2LjMxMDA1QzIyOC4yNTk3ODYgODIwLjQwNTUyMiAyMzMuMDQ4ODQ1IDgyMS4wMzMwNTQgMjM1LjUyNTk0NSA4MjEuMDMzMDU0IDIzOC4wMzYwNzMgODIxLjAzMzA1NCAyNDIuNzkyMTA0IDgyMC40MDU1MjIgMjQ2Ljg4NzU3NiA4MTYuMzEwMDVMMzEyLjc3ODQyOSA3NTAuNDUyMjI2QzMyMi42ODY4MjggNzQwLjUxMDc5OSAzMzcuNzQ3NTk0IDczNy45MzQ2MTUgMzUwLjQ2MzM3MiA3NDQuMDQ0Nzk0IDM2NS43ODgzNjMgNzUxLjQxMDAzNyA0MDEuMDI5MjM1IDc2MS40MTc1MiA0MTMuMjgyNjIyIDc2NC42NTQyNjQgNDI3LjgxNDk0IDc2OC40NTI0ODQgNDM3LjkyMTUwNyA3ODEuNTY0NTk4IDQzNy45MjE1MDcgNzk2LjU1OTMwOEw0MzcuOTIxNTA3IDkxNC41NjgzNEM0MzcuOTIxNTA3IDkyMy40MTk4NDMgNDQ1LjE1NDYzOCA5MzAuNjUyOTc0IDQ1NC4wMzkxNjkgOTMwLjY1Mjk3NEw1NDIuODUxNDUxIDkzMC42NTI5NzRDNTUxLjczNTk4MiA5MzAuNjUyOTc0IDU1OC45MzYwODYgOTIzLjQxOTg0MyA1NTguOTM2MDg2IDkxNC41NjgzNEw1NTguOTM2MDg2IDc5Ni41NTkzMDhDNTU4LjkzNjA4NiA3ODAuNzA1ODcgNTcwLjIzMTY2IDc2Ny4wNjUzMDggNTg1LjgyMDg3NSA3NjQuMTI1ODE2IDYwNi40NjMzNzIgNzYwLjIyODUxMiA2MjYuODQxNjQ2IDc1My40NTc3NzMgNjQ2LjQyNzI0OCA3NDQuMDQ0Nzk0IDY1OS4xNDMwMjcgNzM3LjkzNDYxNSA2NzQuMTcwNzY1IDc0MC41MTA3OTkgNjg0LjA3OTE2NCA3NTAuNDUyMjI2TDc0OS45NzAwMTcgODE2LjMxMDA1Qzc1NC4wOTg1MTYgODIwLjQwNTUyMiA3NTguODU0NTQ4IDgyMS4wMzMwNTQgNzYxLjMzMTY0OCA4MjEuMDMzMDU0IDc2My44MDg3NDcgODIxLjAzMzA1NCA3NjguNTk3ODA3IDgyMC40MDU1MjIgNzcyLjcyNjMwNiA4MTYuMzEwMDVMODM1LjU0NTU1NSA3NTMuNTIzODI5Qzg0MS43ODc4NDcgNzQ3LjIxNTQ4MiA4NDEuNzg3ODQ3IDczNy4wNDI4NTkgODM1LjUxMjUyNyA3MzAuNzM0NTEyTDc2OS42NTQ3MDMgNjY0Ljg3NjY4N0M3NTkuNzQ2MzA0IDY1NC45NjgyODggNzU3LjE3MDEyIDYzOS44NDE0NjYgNzYzLjI0NzI3MSA2MjcuMTkxNzQzIDc3Mi42NjAyNSA2MDcuNjcyMTk3IDc3OS40MzA5OSA1ODcuMjkzOTIzIDc4My4zMjgyOTMgNTY2LjY1MTQyNiA3ODYuMjY3Nzg1IDU1MS4wMjkxODMgNzk5LjkwODM0NyA1MzkuNzMzNjA5IDgxNS43NjE3ODYgNTM5LjczMzYwOUw5MTQuNjQ3NjA3IDUzOS43MzM2MDlDOTIzLjUzMjEzOCA1MzkuNzMzNjA5IDkzMC43NjUyNjkgNTMyLjUwMDQ3NyA5MzAuNzY1MjY5IDUyMy42NDg5NzRMOTMwLjc2NTI2OSA0MzQuODAzNjY0QzkzMC43NjUyNjkgNDI1Ljk1MjE2MSA5MjMuNTMyMTM4IDQxOC43MTkwMyA5MTQuNjQ3NjA3IDQxOC43MTkwM0w4MTUuNzYxNzg2IDQxOC43MTkwM0M3OTkuOTA4MzQ3IDQxOC43MTkwMyA3ODYuMjY3Nzg1IDQwNy40MjM0NTUgNzgzLjMyODI5MyAzOTEuODM0MjQxIDc3OS40MzA5OSAzNzEuMjU3Nzk5IDc3Mi42NjAyNSAzNTAuODQ2NDk3IDc2My4yNDcyNzEgMzMxLjI2MDg5NSA3NTcuMTcwMTIgMzE4LjYxMTE3MyA3NTkuNzQ2MzA0IDMwMy40ODQzNSA3NjkuNjU0NzAzIDI5My41NzU5NTFMODM1LjU0NTU1NSAyMjcuNzE4MTI3Qzg0MS43ODc4NDcgMjIxLjQwOTc3OSA4NDEuNzg3ODQ3IDIxMS4yMzcxNTYgODM1LjUxMjUyNyAyMDQuOTI4ODA5TDc3Mi43MjYzMDYgMTQyLjE0MjU4OEM3NjguNTk3ODA3IDEzOC4wNDcxMTcgNzYzLjgwODc0NyAxMzcuNDE5NTg1IDc2MS4zMzE2NDggMTM3LjQxOTU4NSA3NTguODU0NTQ4IDEzNy40MTk1ODUgNzU0LjA5ODUxNiAxMzguMDQ3MTE3IDc0OS45NzAwMTcgMTQyLjE0MjU4OEw2ODQuMDc5MTY0IDIwOC4wMDA0MTNDNjc0LjE3MDc2NSAyMTcuOTQxODQgNjU5LjE0MzAyNyAyMjAuNTE4MDIzIDY0Ni40MjcyNDggMjE0LjQwNzg0NCA2MjYuODQxNjQ2IDIwNC45OTQ4NjUgNjA2LjQ2MzM3MiAxOTguMjI0MTI2IDU4NS44MjA4NzUgMTk0LjMyNjgyMiA1NzAuMjMxNjYgMTkxLjM4NzMzMSA1NTguOTM2MDg2IDE3Ny43NDY3NjggNTU4LjkzNjA4NiAxNjEuODkzMzNMNTU4LjkzNjA4NiA4Mi4xMzA3MTlDNTU4LjkzNjA4NiA3My4yNDYxODggNTUxLjczNTk4MiA2Ni4wNDYwODQgNTQyLjg1MTQ1MSA2Ni4wNDYwODRMNDU0LjAzOTE2OSA2Ni4wNDYwODRDNDQ1LjE1NDYzOCA2Ni4wNDYwODQgNDM3LjkyMTUwNyA3My4yNDYxODggNDM3LjkyMTUwNyA4Mi4xMzA3MTlMNDM3LjkyMTUwNyAxNjEuODkzMzNDNDM3LjkyMTUwNyAxNzcuMzE3NDA0IDQyNy4yMjA0MzYgMTkwLjc1OTc5OSA0MTIuMTI2NjQyIDE5NC4wOTU2MjYgMzk3LjQ5NTIzOSAxOTcuMzk4NDI2IDM2OS4wMjUxMDYgMjA1LjQ5MDI4NSAzNTAuNDYzMzcyIDIxNC40MDc4NDQgMzM3Ljc0NzU5NCAyMjAuNTE4MDIzIDMyMi42ODY4MjggMjE3Ljk0MTg0IDMxMi43Nzg0MjkgMjA4LjAwMDQxM0wyNDYuOTIwNjA0IDE0Mi4xNDI1ODhDMjQyLjc5MjEwNCAxMzguMDQ3MTE3IDIzOC4wMzYwNzMgMTM3LjQxOTU4NSAyMzUuNTI1OTQ1IDEzNy40MTk1ODUgMjMzLjA0ODg0NSAxMzcuNDE5NTg1IDIyOC4yNTk3ODYgMTM4LjA0NzExNyAyMjQuMTY0MzE0IDE0Mi4xNDI1ODhMMTYxLjM0NTA2NSAyMDQuOTI4ODA5QzE1NS4wNjk3NDYgMjExLjIzNzE1NiAxNTUuMDY5NzQ2IDIyMS40MDk3NzkgMTYxLjM0NTA2NSAyMjcuNzE4MTI3TDIyNy4yMDI4OSAyOTMuNTc1OTUxQzIzNi45MTMxMjEgMzAzLjI4NjE4MiAyMzkuNjIxNDE3IDMxNy45NTA2MTMgMjMzLjk3MzYyOSAzMzAuNDY4MjIzIDIyNy42NjUyODIgMzQ0LjUwNTEyMiAyMTcuMTYyMzc5IDM3Mi44MTAxMTUgMjEzLjU2MjMyNyAzOTEuODM0MjQxIDIxMC42MjI4MzYgNDA3LjQyMzQ1NSAxOTYuOTgyMjczIDQxOC43MTkwMyAxODEuMDk1ODA3IDQxOC43MTkwM0w4Mi4yMDk5ODYgNDE4LjcxOTAzQzczLjM1ODQ4MyA0MTguNzE5MDMgNjYuMTI1MzUyIDQyNS45NTIxNjEgNjYuMTI1MzUyIDQzNC44MDM2NjRMNjYuMTI1MzUyIDUyMy42NDg5NzRDNjYuMTI1MzUyIDUzMi41MDA0NzcgNzMuMzU4NDgzIDUzOS43MzM2MDkgODIuMjA5OTg2IDUzOS43MzM2MDlMMTExLjkzNTE4MyA1MzkuNzMzNjA5QzEzMC4xNjY2MzcgNTM5LjczMzYwOSAxNDQuOTYzMTc5IDU1NC40OTcxMjMgMTQ0Ljk2MzE3OSA1NzIuNzYxNjA1IDE0NC45NjMxNzkgNTkxLjAyNjA4NyAxMzAuMTY2NjM3IDYwNS43ODk2MDEgMTExLjkzNTE4MyA2MDUuNzg5NjAxTDgyLjIwOTk4NiA2MDUuNzg5NjAxQzM2LjkyODYwMyA2MDUuNzg5NjAxIDAuMDY5MzU5IDU2OC45MzAzNTcgMC4wNjkzNTkgNTIzLjY0ODk3NEwwLjA2OTM1OSA0MzQuODAzNjY0QzAuMDY5MzU5IDM4OS41MjIyODEgMzYuOTI4NjAzIDM1Mi42NjMwMzcgODIuMjA5OTg2IDM1Mi42NjMwMzdMMTU1LjQzMzA1NCAzNTIuNjYzMDM3QzE1OC40MDU1NzMgMzQyLjgyMDY5NCAxNjEuODA3NDU3IDMzMy4xNzY1MTkgMTY1LjAxMTE3MyAzMjQuNzU0MzhMMTE0LjY0MzQ3OCAyNzQuNDE5NzE0QzgyLjYwNjMyMiAyNDIuMzgyNTU3IDgyLjYwNjMyMiAxOTAuMjY0Mzc5IDExNC42MTA0NSAxNTguMjI3MjIyTDE3Ny40NjI3MjcgOTUuNDQxMDAxQzIwOC40NzYwMTYgNjQuMzk0Njg1IDI2Mi42MDg5MDIgNjQuMzk0Njg1IDI5My42MjIxOTEgOTUuNDQxMDAxTDM0My44NTc3NzMgMTQ1LjY0MzU1NkMzNTMuMzM2ODA4IDE0Mi4xMDk1NiAzNjMuMDQ3MDM5IDEzOS4wMDQ5MjggMzcxLjg2NTUxNCAxMzYuMzk1NzE3TDM3MS44NjU1MTQgODIuMTMwNzE5QzM3MS44NjU1MTQgMzYuODQ5MzM2IDQwOC43MjQ3NTgtMC4wMDk5MDggNDU0LjAzOTE2OS0wLjAwOTkwOEw1NDIuODUxNDUxLTAuMDA5OTA4QzU4OC4xNjU4NjItMC4wMDk5MDggNjI0Ljk5MjA3OCAzNi44NDkzMzYgNjI0Ljk5MjA3OCA4Mi4xMzA3MTlMNjI0Ljk5MjA3OCAxMzUuODM0MjQxQzYzNC41MzcxNjkgMTM4LjU0MjUzNiA2NDMuOTgzMTc2IDE0MS43MTMyMjQgNjUzLjI5NzA3MSAxNDUuNDEyMzZMNzAzLjI2ODQzIDk1LjQ0MTAwMUM3MzQuMjQ4NjkgNjQuMzk0Njg1IDc4OC40MTQ2MDUgNjQuMzk0Njg1IDgxOS40Mjc4OTMgOTUuNDQxMDAxTDg4Mi4yNDcxNDIgMTU4LjIyNzIyMkM5MTQuMjUxMjcxIDE5MC4yNjQzNzkgOTE0LjI1MTI3MSAyNDIuMzgyNTU3IDg4Mi4yNDcxNDIgMjc0LjQxOTcxNEw4MzIuMjc1Nzg0IDMyNC4zOTEwNzJDODM1Ljk0MTg5MSAzMzMuNzA0OTY3IDgzOS4xMTI1NzkgMzQzLjE1MDk3NCA4NDEuODUzOTAzIDM1Mi42NjMwMzdMOTE0LjY0NzYwNyAzNTIuNjYzMDM3Qzk1OS45NjIwMTggMzUyLjY2MzAzNyA5OTYuODIxMjYyIDM4OS41MjIyODEgOTk2LjgyMTI2MiA0MzQuODAzNjY0TDk5Ni44MjEyNjIgNTIzLjY0ODk3NEM5OTYuODIxMjYyIDU2OC45MzAzNTcgOTU5Ljk2MjAxOCA2MDUuNzg5NjAxIDkxNC42NDc2MDcgNjA1Ljc4OTYwMUw4NDEuODUzOTAzIDYwNS43ODk2MDFDODM5LjExMjU3OSA2MTUuMzAxNjY0IDgzNS45NDE4OTEgNjI0Ljc0NzY3MSA4MzIuMjc1Nzg0IDYzNC4wOTQ1OTRMODgyLjI0NzE0MiA2ODQuMDMyOTI1QzkxNC4yNTEyNzEgNzE2LjA3MDA4MSA5MTQuMjUxMjcxIDc2OC4xODgyNiA4ODIuMjQ3MTQyIDgwMC4yMjU0MTZMODE5LjQyNzg5MyA4NjMuMDExNjM3Qzc4OC40MTQ2MDUgODk0LjA1Nzk1NCA3MzQuMjgxNzE4IDg5NC4wNTc5NTQgNzAzLjIzNTQwMiA4NjMuMDExNjM3TDY1My4yOTcwNzEgODEzLjA0MDI3OUM2NDMuOTgzMTc2IDgxNi43Mzk0MTQgNjM0LjUzNzE2OSA4MTkuOTEwMTAyIDYyNC45OTIwNzggODIyLjYxODM5OEw2MjQuOTkyMDc4IDkxNC41NjgzNEM2MjQuOTkyMDc4IDk1OS44NDk3MjMgNTg4LjE2NTg2MiA5OTYuNzA4OTY3IDU0Mi44NTE0NTEgOTk2LjcwODk2NyIgcC1pZD0iNjg5OCIgZmlsbD0iIzE4N0RGRiI+PC9wYXRoPjwvc3ZnPg==',
            className: 'import_icon'
        },
        {
            type: 'DiamondTask',
            // type: 'diamond',
            label: '条件判断',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAAHeEJUAAAAABGdBTUEAALGPC/xhBQAAAvVJREFUOBGNVEFrE0EU/mY3bQoiFlOkaUJrQUQoWMGePLX24EH0IIoHKQiCV0G8iE1covgLiqA/QTzVm1JPogc9tIJYFaQtlhQxqYjSpunu+L7JvmUTU3AgmTfvffPNN++9WSA1DO182f6xwILzD5btfAoQmwL5KJEwiQyVbSVZ0IgRyV6PTpIJ81E5ZvqfHQR0HUOBHW4L5Et2kQ6Zf7iAOhTFAA8s0pEP7AXO1uAA52SbqGk6h/6J45LaLhO64ByfcUzM39V7ZiAdS2yCePPEIQYvTUHqM/n7dgQNfBKWPjpF4ISk8q3J4nB11qw6X8l+FsF3EhlkEMfrjIer3wJTLwS2aCNcj4DbGxXTw00JmAuO+Ni6bBxVUCvS5d9aa04+so4pHW5jLTywuXAL7jJ+D06sl82Sgl2JuVBQn498zkc2bGKxULHjCnSMadBKYDYYHAtsby1EQ5lNGrQd4Y3v4Zo0XdGEmDno46yCM9Tk+RiJmUYHS/aXHPNTcjxcbTFna000PFJHIVZ5lFRqRpJWk9/+QtlOUYJj9HG5pVFEU7zqIYDVsw2s+AJaD8wTd2umgSCCyUxgGsS1Y6TBwXQQTFuZaHcd8gAGioE90hlsY+wMcs30RduYtxanjMGal8H5dMW67dmT1JFtYUEe8LiQLRsPZ6IIc7A4J5tqco3T0pnv/4u0kyzrYUq7gASuEyI8VXKvB9Odytv6jS/PNaZBln0nioJG/AVQRZvApOdhjj3Jt8QC8Im09SafwdBdvIpztpxWxpeKCC+EsFdS8DCyuCn2munFpL7ctHKp+Xc5cMybeIyMAN33SPL3ZR9QV1XVwLyzHm6Iv0/yeUuUb7PPlZC4D4HZkeu6dpF4v9j9MreGtMbxMMRLIcjJic9yHi7WQ3yVKzZVWUr5UrViJvn1FfUlwe/KYVfYyWRLSGNu16hR01U9IacajXPei0wx/5BqgInvJN+MMNtNme7ReU9SBbgntovn0kKHpFg7UogZvaZiOue/q1SBo9ktHzQAAAAASUVORK5CYII=',
        }, {
            // type: 'circle',
            type: 'EndTask',
            text: '结束',
            label: '结束节点',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAA1BJREFUOBFtVE1IVUEYPXOf+tq40Y3vPcmFIdSjIorWoRG0ERWUgnb5FwVhYQSl72oUoZAboxKNFtWiwKRN0M+jpfSzqJAQclHo001tKkjl3emc8V69igP3znzfnO/M9zcDcKT67azmjYWTwl9Vn7Vumeqzj1DVb6cleQY4oAVnIOPb+mKAGxQmKI5CWNJ2aLPatxWa3aB9K7/fB+/Z0jUF6TmMlFLQqrkECWQzOZxYGjTlOl8eeKaIY5yHnFn486xBustDjWT6dG7pmjHOJd+33t0iitTPkK6tEvjxq4h2MozQ6WFSX/LkDUGfFwfhEZj1Auz/U4pyAi5Sznd7uKzznXeVHlI/Aywmk6j7fsUsEuCGADrWARXXwjxWQsUbIupDHJI7kF5dRktg0eN81IbiZXiTESic50iwS+t1oJgL83jAiBupLDCQqwziaWSoAFSeIR3P5Xv5az00wyIn35QRYTwdSYbz8pH8fxUUAtxnFvYmEmgI0wYXUXcCCSpeEVpXlsRhBnCEATxWylL9+EKCAYhe1NGstUa6356kS9NVvt3DU2fd+Wtbm/+lSbylJqsqkSm9CRhvoJVlvKPvF1RKY/FcPn5j4UfIMLn8D4UYb54BNsilTDXKnF4CfTobA0FpoW/LSp306wkXM+XaOJhZaFkcNM82ASNAWMrhrUbRfmyeI1FvRBTpN06WKxa9BK0o2E4Pd3zfBBEwPsv9sQBnmLVbLEIZ/Xe9LYwJu/Er17W6HYVBc7vmuk0xUQ+pqxdom5Fnp55SiytXLPYoMXNM4u4SNSCFWnrVIzKG3EGyMXo6n/BQOe+bX3FClY4PwydVhthOZ9NnS+ntiLh0fxtlUJHAuGaFoVmttpVMeum0p3WEXbcll94l1wM/gZ0Ccczop77VvN2I7TlsZCsuXf1WHvWEhjO8DPtyOVg2/mvK9QqboEth+7pD6NUQC1HN/TwvydGBARi9MZSzLE4b8Ru3XhX2PBxf8E1er2A6516o0w4sIA+lwURhAON82Kwe2iDAC1Watq4XHaGQ7skLcFOtI5lDxuM2gZe6WFIotPAhbaeYlU4to5cuarF1QrcZ/lwrLaCJl66JBocYZnrNlvm2+MBCTmUymPrYZVbjdlr/BxlMjmNmNI3SAAAAAElFTkSuQmCC',
        }
    ]
    return dndPanelPra
}
// 为菜单追加选项（必须在 lf.render() 之前设置）
export const menuConfig = {
    nodeMenu: [
        {
            text: '分享',
            callback () {
                alert('分享成功！');
            }
        },
        {
            text: '属性',
            callback (node) {
                alert(`
            节点id：${node.id}
            节点类型：${node.type}
            节点坐标：(x: ${node.x}, y: ${node.y})`
                );
            },
        },
    ],
    edgeMenu: [
        {
            text: '属性',
            callback (edge) {
                alert(`
            边id：${edge.id}
            边类型：${edge.type}
            边坐标：(x: ${edge.x}, y: ${edge.y})
            源节点id：${edge.sourceNodeId}
            目标节点id：${edge.targetNodeId}`
                );
            },
        },
    ],
    graphMenu: [
        {
            text: '分享',
            callback () {
                alert('分享成功！');
            }
        },
    ],
}
//
