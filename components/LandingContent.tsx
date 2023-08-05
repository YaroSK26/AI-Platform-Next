"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
  {
    name: "Jaroslav",
    avatar: "J",
    title: "Fullstack Developer",
    description: "This is the best app i have used!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "Data Scientist",
    description: "Really nice job developers!  ",
  },
  {
    name: "Patricia",
    avatar: "P",
    title: "Designer",
    description: "Wow! This app is really crazy. I like it. ♥",
  },
  {
    name: "John",
    avatar: "J",
    title: "Software Engineer",
    description: "I never seen something like this.",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 sm>grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testimonials.map((i) => (
                <Card key={i.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">{i.name}</p>
                                <p className="text-zinc-400 text-sm">{i.title}</p>
                            </div>
                            </CardTitle>
                            <CardDescription className=" pt-4 px-0 text-white">
                                    {i.description}
                            </CardDescription>
                        </CardHeader>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default LandingContent
