package com.meetyou.service.impl;

import com.meetyou.service.SearchDataService;
import com.meetyou.dao.SearchDataDao;
import com.meetyou.entity.SearchData;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

/**
 * <p>文件名称：SearchDataDao.java</p>
 * <p>文件描述：</p>
 * <p>版权所有： 版权所有(C)2013-2099</p>
 * <p>公   司： 美柚 </p>
 * <p>内容摘要： </p>
 * <p>其他说明： </p>
 *
 * @version 1.0
 * @author <a> href="mailto:chenzhiwei@linggan.com">chenzhiwei</a>
 * @since 2016-1-21 上午8:29:31
 */

// Spring的注解形式: @Repository @servive @Controller, 他们分别对应存储层Bean, 业务层Bean,和展示层Bean.

@Service("searchDataService")
public class SearchDataServiceImpl implements SearchDataService {
	@Resource
	private SearchDataDao searchDataDao;

	public ArrayList<SearchData> getAllData() {
		return searchDataDao.getAllData();
	}

	public ArrayList<SearchData> getData(String startDate, String endDate) {
		return searchDataDao.getData(startDate, endDate);
	}
}

