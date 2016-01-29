package com.meetyou.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * <p>
 * 文件名称：SearchData.java
 * </p>
 * <p>
 * 文件描述：
 * </p>
 * <p>
 * 版权所有： 版权所有(C)2013-2099
 * </p>
 * <p>
 * 公 司： 美柚
 * </p>
 * <p>
 * 内容摘要：
 * </p>
 * <p>
 * 其他说明：
 * </p>
 * 
 * @version 1.0
 * @author <a> href="mailto:chenzhiwei@linggan.com">chenzhiwei</a>
 * @since 2016-1-27 下午8:23:12
 */
@Entity
@Table(name = "searchdata")
public class SearchData {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@Column(name = "date_time")
	private Date dateTime;
	@Column(name = "all_query_times")
	private Double allQueryTimes;
	@Column(name = "avg_hits")
	private Double avgHits;
	@Column(name = "avg_qtime")
	private Double avgQtime;
	@Column(name = "forhelp_query_times")
	private Double forHelpQueryTimes;
	@Column(name = "forhelp_fail_times")
	private Double forHelpFailTimes;
	@Column(name = "experience_query_times")
	private Double experienceQueryTimes;
	@Column(name = "experience_fail_times")
	private Double experienceFailTimes;
	@Column(name = "knowledge_query_times")
	private Double knowledgeQueryTimes;
	@Column(name = "knowledge_fail_times")
	private Double knowledgeFailTimes;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
    
	public String getDateTime() {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String ctime = formatter.format(dateTime);
		return ctime;
	}

	public void setDateTime(Date dateTime) {

		this.dateTime = dateTime;
	}

	public Double getAllQueryTimes() {
		return allQueryTimes;
	}

	public void setAllQueryTimes(Double allQueryTimes) {
		this.allQueryTimes = allQueryTimes;
	}

	public Double getAvgHits() {
		return avgHits;
	}

	public void setAvgHits(Double avgHits) {
		this.avgHits = avgHits;
	}

	public Double getAvgQtime() {
		return avgQtime;
	}

	public void setAvgQtime(Double avgQtime) {
		this.avgQtime = avgQtime;
	}

	public Double getForHelpQueryTimes() {
		return forHelpQueryTimes;
	}

	public void setForHelpQueryTimes(Double forHelpQueryTimes) {
		this.forHelpQueryTimes = forHelpQueryTimes;
	}

	public Double getForHelpFailTimes() {
		return forHelpFailTimes;
	}

	public void setForHelpFailTimes(Double forHelpFailTimes) {
		this.forHelpFailTimes = forHelpFailTimes;
	}

	public Double getExperienceQueryTimes() {
		return experienceQueryTimes;
	}

	public void setExperienceQueryTimes(Double experienceQueryTimes) {
		this.experienceQueryTimes = experienceQueryTimes;
	}

	public Double getExperienceFailTimes() {
		return experienceFailTimes;
	}

	public void setExperienceFailTimes(Double experienceFailTimes) {
		this.experienceFailTimes = experienceFailTimes;
	}

	public Double getKnowledgeQueryTimes() {
		return knowledgeQueryTimes;
	}

	public void setKnowledgeQueryTimes(Double knowledgeQueryTimes) {
		this.knowledgeQueryTimes = knowledgeQueryTimes;
	}

	public Double getKnowledgeFailTimes() {
		return knowledgeFailTimes;
	}

	public void setKnowledgeFailTimes(Double knowledgeFailTimes) {
		this.knowledgeFailTimes = knowledgeFailTimes;
	}

}