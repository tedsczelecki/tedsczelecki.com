import React, { PureComponent } from 'react';
import { format } from 'date-fns';
import { graphql } from 'gatsby';

import { MainLayout } from '../layouts';
import { NextPrevProject } from '../components/work';
import { SEO } from '../components/helpers';
import { Title } from '../components/text';

import './work.scss';

class WorkPage extends PureComponent {

  render() {
    const {
      data: {
        allFile: {
          edges: images
        }
      }
    } = this.props;

    const {
      description,
      info: {
        categories,
        client,
        company,
        companyUrl,
        date,
      },
      nextProject,
      prevProject,
      subTitle,
      title,
    } = this.props.pageContext;

    const descDiv = document.createElement('div')
    descDiv.innerHTML = description;
    const textDescription = descDiv.textContent || descDiv.innerText || '';

    return (
      <MainLayout>
        <SEO
          title={`${title} - ${subTitle} • Ted Sczelecki`}
          description={textDescription}
        />
        <div className="work-page">
          <Title
            subTitle={subTitle}
            title={title}
          />
          <div className="work-page__content">
            <div className="work-page__details">
              <div className="work-page__title">
                Project Details
              </div>
              <div className="work-page__meta">
                <div className="work-page__meta__item">
                  <strong>Project Date</strong>
                  <span>{format(new Date(date), 'MMMM D YYYY')}</span>
                </div>
                {company && (
                  <div className="work-page__meta__item">
                    <strong>Company</strong>
                    <span>
                      {companyUrl
                        ? <a href={companyUrl} target="_blank" rel="noopener noreferrer">{company}</a>
                        : company
                      }
                    </span>
                  </div>
                )}
                {client && (
                  <div className="work-page__meta__item">
                    <strong>Client</strong>
                    <span>{client}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="work-page__description">
              <p dangerouslySetInnerHTML={{__html: description}} />
              <p><strong>Categories</strong> {categories.join(', ')}</p>
            </div>
          </div>
          <div className="work-page__gallery">
            {images.map(({node}) => (
              <div className="work-page__gallery__item" key={node.publicURL}>
                <img src={node.publicURL} alt=""/>
              </div>
            ))}
          </div>
          <NextPrevProject
            nextProject={nextProject && nextProject.slug}
            prevProject={prevProject && prevProject.slug}
          />
        </div>
      </MainLayout>
    )
  }
}

export const query = graphql`
  query($galleryPath: String!){
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: $galleryPath }
        }
      ) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `

export default WorkPage;
