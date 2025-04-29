import React from "react";
import Header from "../components/Header";

const Projects=()=>{
    return(
        <>
        <Header/>
        <section class="section-services">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">Professional Projects</h2>
						{/* <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p> */}
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-laptop-code"></i>
							</span>
							<h3 class="title">Green AI</h3>
							<h3 class="subtitle">Jan 2025 – Apr 2025</h3>
							<p class="description">AI is transforming the world, but at what cost? Training massive models can consume enormous amounts of energy, contributing to carbon emissions. Green-AI tackles this challenge head-on by offering tools, techniques, and frameworks to make AI development more energy-efficient and environmentally responsible.</p>
							{/* <a href="#" class="learn-more">Learn More</a> */}
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">E-Libary</h3>
							<h3 class="subtitle">Aug 2024– Dec 2024</h3>
							<p class="description">About
							Developed library management system using python, flask, JSON and SQLAlchemy.</p>
							{/* <a href="#" class="learn-more">Learn More</a> */}
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-chart-pie"></i>
							</span>
							<h3 class="title">Data Preprocessing Pipeline</h3>
							<h3 class="subtitle">Dec 2023 – Jan 2024</h3>
							<p class="description">Simplied Interface pipeline built with Flask to preprocess 50M+ data and store in CSV downlodable file, which can we taken directly for analysis</p>
							{/* <a href="#" class="learn-more">Learn More</a> */}
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>
            <div class="row justify-content-center text-center-1">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">Academic Projects</h2>
						{/* <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p> */}
					</div>
				</div>
			</div>
            <div class="row">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">Robinhood Stock predictor</h3>
							<h3 class="subtitle">May 2024 – Jun 2024</h3>
							<p class="description">Created a pipeline to draw data from public API and analysed the behavior by pushing the data stream to Kafka with Moving point momemtum as metric and achieved an accuracy of 78% on end result</p>
							<a href="#" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-chart-pie"></i>
							</span>
							<h3 class="title">vLora</h3>
							<h3 class="subtitle">Jan 2024 – Mar 2024</h3>
							<p class="description">Orchestrated the integration of Segmented Gather Matrix-Vector multiplication CUDA kernels of Punica, resulting in a remarkable 12x speed for serving multiple LoRA models, optimized GPU utilization and reduced inference latency, enabling high-throughput.</p>
							<a href="" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-laptop-code"></i>
							</span>
							<h3 class="title">Serverless Video Analysis Pipeline on AWS</h3>
							<h3 class="subtitle">Apr 2024 – May 2024</h3>
							<p class="description">Developed and deployed a serverless, auto-scaling video processing pipeline leveraging AWS Lambda and S3. The system
streamlines video uploads by performing frame extraction and face recognition using FFmpeg and deep learning models. It
consistently processes 100 concurrent requests within 200 seconds.</p>
							<a href="" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-laptop-code"></i>
							</span>
							<h3 class="title">Folksonomy Mining</h3>
							<h3 class="subtitle">Aug 2023 – Dec 2023</h3>
							<p class="description">Using topic modeling, I analyzed a large set of tweets from the United States that discussed race issues on Twitter. This
approach uncovered hidden patterns and themes within the messages, allowing us to categorize the tweets by the topics
discussed. The classification was done using BERTopic and the Llama2 model.</p>
							<a href="" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">Earthquake Detection Using Deep Neural networks</h3>
							<h3 class="subtitle">Jan 2023 – May 2023</h3>
							<p class="description">Developed modified inception time model and improved overall accuracy from 75% to 83% and compared it with multiple
models like CNN, LSTM, Resnet, inception time, STEAD data set has been used for the experiment.</p>
							<a href="" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-chart-pie"></i>
							</span>
							<h3 class="title">Automotive Inventory Warehouse</h3>
							<h3 class="subtitle">Aug 2023 – Dec 2023</h3>
							<p class="description">Developed a amazon inventory management system on clingo</p>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">Movie genre predictor based in plot summary using Machine Learning</h3>
							<h3 class="subtitle">Jan 2023 – May 2023</h3>
							<p class="description">Experimented with both Machine Learning and Deep Learning models for the classification. It has been found that Bi-LSTM out
performed all the models to give the best precision, recall and F1-score.</p>
							<a href="#" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>

			<div class="row justify-content-center text-center-1">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">GenAI Projects</h2>
						{/* <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p> */}
					</div>
				</div>
			</div>
            <div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">Prompt Efficiency LLM metric system</h3>
							<h3 class="subtitle">Jul 2025 – Apr 2025</h3>
							<p class="description">Developed a data system with data from Mistral 7B from ollama to test the prompts accuracy against the data</p>
							<a href="https://github.com/Harshakuncha/Green-AI" class="learn-more">Source Code</a>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>
		</div>
	</section>
        
        </>
    )
}

export default Projects