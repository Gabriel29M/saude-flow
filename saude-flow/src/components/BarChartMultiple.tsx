"use client";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

// Dados do gráfico
const chartData = [
    { day: "1", entradas: 186, saidas: 80 },
    { day: "2", entradas: 305, saidas: 200 },
    { day: "3", entradas: 237, saidas: 120 },
    { day: "4", entradas: 73, saidas: 190 },
    { day: "5", entradas: 209, saidas: 130 },
    { day: "6", entradas: 214, saidas: 140 },
    { day: "7", entradas: 237, saidas: 120 },
    { day: "8", entradas: 73, saidas: 190 },
    { day: "9", entradas: 209, saidas: 130 },
    { day: "10", entradas: 214, saidas: 140 },
    { day: "11", entradas: 186, saidas: 80 },
    { day: "12", entradas: 305, saidas: 200 },
    { day: "13", entradas: 237, saidas: 120 },
    { day: "14", entradas: 73, saidas: 190 },
    { day: "15", entradas: 209, saidas: 130 },
    { day: "16", entradas: 214, saidas: 140 },
    { day: "17", entradas: 237, saidas: 120 },
    { day: "18", entradas: 73, saidas: 190 },
    { day: "19", entradas: 209, saidas: 130 },
    { day: "20", entradas: 214, saidas: 140 },
    { day: "21", entradas: 186, saidas: 80 },
    { day: "22", entradas: 305, saidas: 200 },
    { day: "23", entradas: 237, saidas: 120 },
    { day: "24", entradas: 73, saidas: 190 },
    { day: "25", entradas: 209, saidas: 130 },
    { day: "26", entradas: 214, saidas: 140 },
    { day: "27", entradas: 237, saidas: 120 },
    { day: "28", entradas: 73, saidas: 190 },
    { day: "29", entradas: 209, saidas: 130 },
    { day: "30", entradas: 214, saidas: 140 },
    { day: "31", entradas: 214, saidas: 140 },

];

// Configuração do gráfico
const chartConfig = {
    entradas: {
        label: "Entradas",
        color: "hsl(var(--chart-1))",
    },
    saidas: {
        label: "Saídas",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;


// Componente Personalizado para os Números do Eixo X
const CustomXAxisTick = ({ x, y, payload }) => {
    return (
        <text
            x={x}
            y={y}
            dy={10}
            textAnchor="middle"
            className="hidden lg:block" // Oculta os números em telas menores que md (768px)
            fontSize={10}
            fill="#000"
        >
            {payload.value}
        </text>
    );
};






export function BarChartMultiple() {
    return (
        <Card>
            <CardHeader>
                <div className="flex">
                    <CardTitle>Entradas e Saídas do Período </CardTitle>

                </div>
                <div className="flex">
                    <DatePickerWithRange />
                    <Button type="submit" className="ml-3">Submit</Button>
                </div>
            </CardHeader>
            <CardContent className="p-0 ">
                <ChartContainer config={chartConfig} className="border-none w-full max-h-[280px]">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 2)}
                            tick={<CustomXAxisTick />}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />

                        <Bar dataKey="entradas" fill="hsl(var(--chart-1))" radius={4} />
                        <Bar dataKey="saidas" fill="hsl(var(--chart-2))" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>

    );
}

