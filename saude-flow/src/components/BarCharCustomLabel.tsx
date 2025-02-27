"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "Aluguel", desktop: 186 },
    { month: "Energia elétrica", desktop: 305 },
    { month: "Água e Esgoto", desktop: 237 },
    { month: "Internet e Telefone", desktop: 73 },
    { month: "Folha de pagamento", desktop: 209 },
    { month: "Sistema de Gestão", desktop: 214 },
    { month: "Marketing e publicidade", desktop: 186 },
    { month: "Alimentos", desktop: 305 },
    { month: "Embalagens e utensílios", desktop: 237 },
    { month: "Gás de cozinha", desktop: 73 },
    { month: "Impostos e taxas", desktop: 209 },
    { month: "Entrega e logística", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },

    label: {
        color: "hsl(var(--background))",
    },
} satisfies ChartConfig

export function BarCharCustomLabel() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Custos Fixos</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-full max-h-[280px]">
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            right: 16,
                        }}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="month"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            hide
                        />
                        <XAxis dataKey="desktop" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Bar
                            dataKey="desktop"
                            layout="vertical"
                            fill="var(--color-desktop)"
                            radius={4}
                        >
                            <LabelList
                                dataKey="month"
                                position="insideLeft"
                                offset={8}
                                className="fill-white dark:fill-slate-200"
                                fontSize={12}
                            />
                            <LabelList
                                dataKey="desktop"
                                position="right"
                                offset={8}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
