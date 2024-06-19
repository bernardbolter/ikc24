"use client"

import { Suspense } from "react"
import Image from "next/image"

import Loading from "./Loading"

const Project = ({ project }) => {
    return (
        <Suspense fallback={<Loading />}>
            <div className="project-container">
                <div className="project-text-container">
                    <h1>{project.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: project.content}} />
                </div>
                <div className="project-slider-container">
                    {project.projects.projectImage1 && (
                        <Image
                        src={project.projects.projectImage1.node.sourceUrl}
                        alt="new new"
                        width={300}
                        height={300}
                    />
                    )}
                </div>
            </div>
        </Suspense>
    )
}

export default Project