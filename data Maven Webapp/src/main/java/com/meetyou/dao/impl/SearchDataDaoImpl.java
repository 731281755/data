package com.meetyou.dao.impl;

import java.util.ArrayList;

import javax.annotation.Resource;

import com.meetyou.entity.SearchData;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.meetyou.dao.SearchDataDao;
import com.meetyou.entity.SearchData;
/**
 * <p>文件名称：SearchDataDaoImpl.java</p>
 * <p>文件描述：</p>
 * <p>版权所有： 版权所有(C)2013-2099</p>
 * <p>公   司： 美柚 </p>
 * <p>内容摘要： </p>
 * <p>其他说明： </p>
 *
 * @version 1.0
 * @author <a> href="mailto:chenzhiwei@linggan.com">chenzhiwei</a>
 * @since 2016-1-21 上午8:31:40
 */
@Repository("searchDataDao")
public class SearchDataDaoImpl implements SearchDataDao {
	@Resource
	private SessionFactory sessionFactory;

	@Transactional(propagation = Propagation.NOT_SUPPORTED, readOnly = true)
	public ArrayList<SearchData> getAllData() {
		String hql = "from SearchData";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);

		@SuppressWarnings("unchecked")
		ArrayList<SearchData> list = (ArrayList<SearchData>) query.list();
		return list;
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED, readOnly = true)
	public ArrayList<SearchData> getData(String startDate, String endDate) {
		String hql = "from SearchData where dateTime >=? and dateTime <=?";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		query.setString(0, startDate);
		query.setString(1, endDate);
		@SuppressWarnings("unchecked")
		ArrayList<SearchData> list = (ArrayList<SearchData>) query.list();
		return list;
	}
}


