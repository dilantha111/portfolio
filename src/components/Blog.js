import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Blog.css';

import { BLOGS } from '../data/blog';

export const Blog = () => {

  return (
    <Container className="blog-container">
      <h1>Blog</h1>
      <Row>
        {BLOGS.map(blog => (
          <Col key={blog.id} className="blog-card-container" md={4}>
            <a href={blog.link} target="_blank" className="blog-card">
              <img src={blog.thumbnail} />
              <div className="blog-card__content">
                <h3> {blog.title} </h3>
                <p> {blog.shortDescription} </p>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};