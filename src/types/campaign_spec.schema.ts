/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type OnQueryOrRepository = OnQuery | OnRepository;

/**
 * A campaign specification, which describes the campaign and what kinds of changes to make (or what existing changesets to track).
 */
export interface CampaignSpec {
  /**
   * The name of the campaign, which is unique among all campaigns in the namespace. A campaign's name is case-preserving.
   */
  name: string;
  /**
   * The description of the campaign.
   */
  description?: string;
  /**
   * The set of repositories (and branches) to run the campaign on, specified as a list of search queries (that match repositories) and/or specific repositories.
   */
  on?: OnQueryOrRepository[];
  /**
   * The sequence of commands to run (for each repository branch matched in the `on` property) to produce the campaign's changes.
   */
  steps?: Step[];
  /**
   * Import existing changesets on code hosts.
   */
  importChangesets?: {
    /**
     * The repository name as configured on your Sourcegraph instance.
     */
    repository: string;
    /**
     * The changesets to import from the code host. For GitHub this is the PR number, for GitLab this is the MR number, for Bitbucket Server this is the PR number.
     */
    externalIDs: (string | number)[];
  }[];
  /**
   * A template describing how to create (and update) changesets with the file changes produced by the command steps.
   */
  changesetTemplate?: {
    /**
     * The title of the changeset.
     */
    title: string;
    /**
     * The body (description) of the changeset.
     */
    body?: string;
    /**
     * The name of the Git branch to create or update on each repository with the changes.
     */
    branch: string;
    commit: ExpandedGitCommitDescription;
    /**
     * Whether to publish the changeset. An unpublished changeset can be previewed on Sourcegraph by any person who can view the campaign, but its commit, branch, and pull request aren't created on the code host. A published changeset results in a commit, branch, and pull request being created on the code host.
     */
    published: boolean;
  };
}
/**
 * A Sourcegraph search query that matches a set of repositories (and branches). Each matched repository branch is added to the list of repositories that the campaign will be run on.
 */
export interface OnQuery {
  /**
   * A Sourcegraph search query that matches a set of repositories (and branches). If the query matches files, symbols, or some other object inside a repository, the object's repository is included.
   */
  repositoriesMatchingQuery: string;
}
/**
 * A specific repository (and branch) that is added to the list of repositories that the campaign will be run on.
 */
export interface OnRepository {
  /**
   * The name of the repository (as it is known to Sourcegraph).
   */
  repository: string;
  /**
   * The branch on the repository to propose changes to. If unset, the repository's default branch is used.
   */
  branch?: string;
}
/**
 * A command to run (as part of a sequence) in a repository branch to produce the campaign's changes.
 */
export interface Step {
  /**
   * The shell command to run in the container. It can also be a multi-line shell script. The working directory is the root directory of the repository checkout.
   */
  run: string;
  /**
   * The Docker image used to launch the Docker container in which the shell command is run.
   */
  container: string;
  /**
   * Environment variables to set in the environment when running this command.
   */
  env?: {
    [k: string]: string;
  };
}
/**
 * The Git commit to create with the changes.
 */
export interface ExpandedGitCommitDescription {
  /**
   * The Git commit message.
   */
  message: string;
  author?: GitCommitAuthor;
}
/**
 * The author of the Git commit.
 */
export interface GitCommitAuthor {
  /**
   * The Git commit author name.
   */
  name: string;
  /**
   * The Git commit author email.
   */
  email: string;
}